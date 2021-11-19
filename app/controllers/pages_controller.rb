class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    redirect_to lists_path if user_signed_in?
  end
end
