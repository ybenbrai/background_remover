from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from rembg import remove
from io import BytesIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/remove-background")
async def remove_background(image: UploadFile = File(...)):
    input_image = await image.read()

    output_image = remove(input_image)

    output_buffer = BytesIO(output_image)
    output_buffer.seek(0)

    return StreamingResponse(
        output_buffer,
        media_type="image/png",
        headers={"Content-Disposition": "attachment; filename=removed-background.png"},
    )
