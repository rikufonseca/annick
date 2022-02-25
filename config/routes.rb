Rails.application.routes.draw do
  root to: 'homes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/menu', to: 'mesotherapies#menu'
  get '/tarifs', to: 'mesotherapies#tarifs'
  resources :mesotherapies, only: %i[index show]
end
