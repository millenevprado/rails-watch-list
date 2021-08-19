Rails.application.routes.draw do
  # list all lists
  # get 'lists', to: 'lists#index'

  # show a form to create a new list
  # get 'lists/new', to: 'lists#new'

  # show a list
  # get 'lists/:id', to: 'lists#show', as: :list

  # save list into db
  # post 'lists', to: 'lists#create'
  resources :lists, except: %i[edit update destroy] do
    resources :bookmarks, only: %i[new create destroy]
  end


end
