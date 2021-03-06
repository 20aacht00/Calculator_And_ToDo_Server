class controller{
    constructor(model,view){
        this.model=model;
        this.view=view;

        this.model.LoadLocalStorage();
        this.model.ListConnection(this.UpdateListConnection);
        this.view.FilterButtonsEventer(this.FilterConnection);
        this.view.SubmitTodo(this.SubmitConnection);
        this.view.RemoveTodo(this.RemoveConnection);
        this.view.EditTodo(this.EditConnection);
        this.view.DoneTodo(this.DoneConnection);
        this.view.Download(this.DownloadConnection);
        this.view.SignOut(this.SignOutConnection);
        this.view.SignInUpBtn(this.SignInUpBtnConnection);

        this.UpdateListConnection(this.model.todos);
    }

    UpdateListConnection = todos => {
        this.view.ShowTodos(todos);
    }

    FilterConnection = type => {
        this.model.FilterChanger(type);
    }

    SubmitConnection = Title => {
        this.model.AddTodo(Title);
    }

    EditConnection = (ID, NewTitle) => {
        this.model.EditTodo(ID,NewTitle);
    }

    RemoveConnection = ID => {
        this.model.RemoveTodo(ID);
    }

    DoneConnection = ID => {
        this.model.DoneToDo(ID);
    }

    DownloadConnection = () => {
        this.model.Download();
    }

    SignOutConnection = () => {
        this.model.SignOut();
    }
    SignInUpBtnConnection = () =>{
        this.model.SignInUpBtn();
    }
}