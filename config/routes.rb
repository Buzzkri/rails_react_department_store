Rails.application.routes.draw do
  namespace :api do
    resources :products do
    end
  end
end
