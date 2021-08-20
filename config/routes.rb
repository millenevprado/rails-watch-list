Rails.application.routes.draw do
  # list all lists
  # get 'lists', to: 'lists#index'

  # show a form to create a new list
  # get 'lists/new', to: 'lists#new'

  # show a list
  # get 'lists/:id', to: 'lists#show', as: :list

  # save list into db
  # post 'lists', to: 'lists#create'
  root to: 'lists#index'
  resources :lists, except: %i[index edit update destroy] do
    resources :bookmarks, only: %i[new create]
  end
  resources :bookmarks, only: :destroy
end
