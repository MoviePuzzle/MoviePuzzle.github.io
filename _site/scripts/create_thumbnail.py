import os
from PIL import Image
import sys
from pdf2image import convert_from_path


if __name__ == '__main__':
    filename = sys.argv[1]

    target_w = 170
    if len(sys.argv) > 2:
        target_w = int(sys.argv[2])

    if os.path.exists(filename):
        pages = convert_from_path(filename, 500)
        img = pages[0]
        w, h = img.size
        if w > target_w:
            target_h = round(float(h) / w * target_w)
            img = img.resize((target_w, target_h))
            img.save(filename[:-4] + '_thumbnail.jpg', 'JPEG')

