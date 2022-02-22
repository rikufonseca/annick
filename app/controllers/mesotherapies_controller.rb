class MesotherapiesController < ApplicationController
  def index
    @mesotherapies = Mesotherapie.all
  end

  def show
    @mesotherapie = Mesotherapie.find(params[:id])
  end
end
