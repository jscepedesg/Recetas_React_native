import {observable, computed, action} from "mobx";

const categoriesData =[
    {
      "id": "1",
      "name": "Fish"
    },
    {
      "id": "2",
      "name": "Meat"
    },
    {
      "id": "3",
      "name": "Breakfast"
    },
    {
        "id": "4",
        "name": "Fruit"
    }
  ];

  const dataList =[
    {
      "id": "76459",
      "name": "Escovitch Fish",
      "categoryId": "1",
      "categoryName": "Fish",
      "duration": 11,
      "complexity": "Hard",
      "people": 3,
      "recommended": true,
      "favorite": true,
      "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
      "description": 
      "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
      "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
    },
    {
      "id": "2222",
      "name": "Escovitch Fish",
      "categoryId": "1",
      "categoryName": "Fish",
      "duration": 11,
      "complexity": "Hard",
      "people": 3,
      "recommended": true,
      "favorite": true,
      "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
      "description": 
      "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
      "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
    },
    {
      "id": "3333",
      "name": "Escovitch Fish",
      "categoryId": "1",
      "categoryName": "Fish",
      "duration": 11,
      "complexity": "Hard",
      "people": 3,
      "recommended": true,
      "favorite": true,
      "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
      "description": 
      "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
      "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
    },
    {
      "id": "4444",
      "name": "Escovitch Fish",
      "categoryId": "1",
      "categoryName": "Fish",
      "duration": 11,
      "complexity": "Hard",
      "people": 3,
      "recommended": true,
      "favorite": true,
      "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
      "description": 
      "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
      "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
    }
  ];
class RecipeStore
{
    @observable categories = [];
    @observable recipes = [];
    @observable favorites = [];
    @observable recommended = [];
    @observable loading = false;

    @computed
    get categoriesSource()
    {
        return this.categories.slice();
    }
    @computed
    get recipesSource() 
    {
      return this.recipes.slice();
    }
    @computed
    get favoritesSource() 
    {
      return this.favorites.slice();
    }
    @computed
    get recommendedSource() 
    {
      return this.recommended.slice();
    }
    getCategories()
    {
        /*
        connecting server (loading true)
        asking categories
        loading false
        saving in this.categories 
        */

        this.loading=true;
        setTimeout(()=> {
            //this.metodoQueModificaElEstado(categoriesData);
            this.loading = false;
            this.categories = categoriesData;
        },1000);

    }
    /*@action
    function metodoQueModificaElEstado(categoriesData)
    {
        this.loading = false;
        this.categories = categoriesData;
    }*/
    getRecipes(categoryId = null) 
    {
      this.loading = true;
      setTimeout(()=> {
        this.loading= false;
        if(categoryId)
        {
          this.recipes = dataList.filter(item => {
            return item.categoryId == categoryId;
          });
        }
        else 
        {
          this.recipes = dataList;
        }
      },1000);

    }
    getFavorites()
    {
      setTimeout(()=> {
        //this.metodoQueModificaElEstado(categoriesData);
        this.loading = false;
        this.favorites = dataList;
    },1000);
    }
    getRecommended()
    {
      setTimeout(()=> {
        //this.metodoQueModificaElEstado(categoriesData);
        this.loading = false;
        this.recommended = dataList;
    },1000);
    }
}

export default RecipeStore;