Rails.application.routes.draw do
<<<<<<< HEAD
  get 'portfolio/index'

  get 'portfolio/about'

  get 'portfolio/works'
=======
  devise_for :controllers
  devise_for :users
  devise_for :admin_users
  root to: 'products#index'
  
  resources :prodducts, :expect=>[:new]
  
      devise_for :users, controllers: {
        sessions: 'users/sessions'
      }

>>>>>>> bf8c690587b21a004e44f35b8a2e8c7a629b4bec

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
