/**
 * Created by PhpStorm.
 * User: Tran Huy Tiep
 * Date: 31 07 2018
 * Time: 4:12 PM
 */
import { QueryMongoodb } from "./models";
import * as Mongoose from "mongoose";
export declare class CategoryModel extends QueryMongoodb {
    constructor(schema: Mongoose.Model<Mongoose.Document>);
}
export { categoryModel };