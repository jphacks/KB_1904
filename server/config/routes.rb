Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
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
    resources :quest_achivements, only: :index
    resources :reward_acquisitions, only: :index
    resources :point_grants, only: :index
  end
end