export interface Recipe {
    item:{id:number,
        title:string,
        description:string,
        difficulty:number,
        time:number,
        ingredients:string[],
        image?:string,
        recipes: string[],
    };
    deleteRecipe: (id:number) => void
}  

export interface RecipeList {
    recipeList: Recipe[]
}

export interface RecipeFormProps {
        title:string,
        description:string,
        difficulty:number,
        time:number,
        ingredients:string[],
        image?:string,
}



