#configuring cloudinary in flask
import cloudinary
import cloudinary.uploader
import cloudinary.api
from dotenv import load_dotenv
import os

cloudinary.config(
    cloud_name=os.getenv("CLOUD_NAME"),
    api_key=os.getenv("YOUR_API_KEY"),
    api_secret=os.getenv("YOUR_API_SECRET"),
    secure=True
    # secure=True -> When you upload images or generate URLs, Cloudinary will return HTTPS links.
    # If you set secure=False (or omit it), Cloudinary might give HTTP links (less secure).
)
