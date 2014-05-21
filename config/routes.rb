NatesPhotos::Application.routes.draw do

  get "static_pages/index" => 'static_pages#index'
  get "static_pages/photography" => 'static_pages#photography', :path => '/photography', as: 'photography'
  get "static_pages/set-page" => 'static_pages#set_page', :path => 'photography/set-page', as: 'set_page'
  get "static_pages/cinematography" => 'static_pages#cinematography', :path => '/cinematography', as: 'cinematography'
  get "static_pages/video-page" => 'static_pages#video_page', :path => 'cinematogrpahy/video-page', as: 'video_page'
  root :to => "static_pages#index"

  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root to: 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
