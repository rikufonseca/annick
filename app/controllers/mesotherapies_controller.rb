class MesotherapiesController < ApplicationController
  before_action :set_mesotherapies

  def index
  end

  def show
    @mesotherapie = Mesotherapie.find(params[:id])
  end

  private

  def set_mesotherapies
    @mesotherapies = Mesotherapie.all
  end
end
