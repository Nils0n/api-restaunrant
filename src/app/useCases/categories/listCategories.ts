import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function lisCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    res.json(categories);

  } catch (error) {
    console.log(error);
  }

}
