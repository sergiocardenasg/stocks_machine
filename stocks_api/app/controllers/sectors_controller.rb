class SectorsController < ApplicationController
  before_action :set_sector, only: [:show, :update, :destroy]

  # GET /sectors
  def index
    sectors = Sector.all
    sectors.first.stocks
    render json: sectors, include: :stocks
  end

  # GET /sectors/1
  def show
    render json: sector
  end

  # POST /sectors
  def create
    @sector = Sector.new(sector_params)

    if @sector.save
      render json: @sector, status: :created, location: @sector
    else
      render json: @sector.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sectors/1
  def update
    if @sector.update(sector_params)
      render json: @sector
    else
      render json: @sector.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sectors/1
  def destroy
    @sector.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sector
      @sector = Sector.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sector_params
      params.require(:sector).permit(:name)
    end
end
