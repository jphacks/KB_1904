Rails.application.routes.draw do
  devise_for :parents
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    post '/login', to: 'authentication#login', as: :login
    delete '/logout', to: 'authentication#logout', as: :logout

    resources :parents
    resources :children do
      put 'grant', on: :member
    end
    resources :quests do
      put 'approve', on: :member
    end
    resources :rewards do
      put 'approve', on: :member
    end
    resources :quest_achievements, only: :index
    resources :reward_acquisitions, only: :index
    resources :point_grants, only: :index
  end
end
