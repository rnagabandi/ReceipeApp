export interface Ingredient {
    ingredient: String;
    measure: String;
}

export interface Instruction {

    instruction: string;
    photo: string;

}

export class Recipe {
public id: number;
public title: string;
public description: string;
public feeds_this_many: number;
public preparation_time: number;
public ingredients: Ingredient[];
public instructions: Instruction[];
public cover_photo: string;
public keywords: string[];

constructor(id: number,  t: string, d: string, f: number,
    p: number, ingr: Ingredient[], inst: Instruction[], cp: string, keywords: string[]) {
    this.id = id;
    this.title = t ;
    this.description = d;
    this.feeds_this_many = f;
    this.preparation_time = p;
    this.ingredients = ingr;
    this.instructions = inst;
    this.cover_photo = cp;
    this.keywords = keywords;
    }

    public static recipeFromJson(obj: any): Recipe {
        return new Recipe(obj.id, obj.title, obj.description, obj.feeds_this_many,
            obj.preparation_time, obj.ingredients, obj.instructions, obj.cover_photo, obj.keywords);
    }

    public static createBlank() {
        return new Recipe(-1, '', '', 1, 1, [], [], null, null) ;
    }

}
