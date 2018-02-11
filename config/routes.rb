Rails.application.routes.draw do
  devise_for :controllers
  devise_for :users
  devise_for :admin_users
  root to: 'products#index'
  
  resources :prodducts, :expect=>[:new]
  
      devise_for :users, controllers: {
        sessions: 'users/sessions'
      }


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
