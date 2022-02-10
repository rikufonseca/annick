class HomesController < ApplicationController
  def index
   render variants: %i[mobile desktop]
  end
end
