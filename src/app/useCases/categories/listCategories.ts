import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function lisCategories(req: Request, res: Response) {
  try {

    const categories = await Category.find();

    if (categories.length == 0) {
      res.sendStatus(204);
    }

    res.json(categories);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}
