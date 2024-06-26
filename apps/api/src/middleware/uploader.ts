import { NextFunction, Request, Response } from 'express';
import { multerUpload } from '../helpers/multer';

import { rmSync } from 'fs';

export const uploader = (req: Request, res: Response, next: NextFunction) => {
  const upload = multerUpload.fields([{ name: 'image', maxCount: 1 }]);

  upload(req, res, function (err) {
    try {
      if (err) throw err;

      if (req.files) {
        const uploadedFiles = Array.isArray(req.files)
          ? req.files
          : req.files['image'];

        if (Array.isArray(uploadedFiles)) {
          uploadedFiles?.forEach((item) => {
            if (item.size > 5 * Math.pow(10, 6)) {
              throw { message: `${item.originalname} is Too Large` };
            }
          });
        }
      }

      next();
    } catch (error: any) {
      if (req.files) {
        const uploadedFiles = Array.isArray(req.files)
          ? req.files
          : req.files['image'];

        if (Array.isArray(uploadedFiles)) {
          uploadedFiles?.forEach((item) => {
            rmSync(item.path);
          });
        }
      }

      next({
        status: 500,
        message: error.message,
      });
    }
  });
};
