class InvestorsController < ApplicationController
  before_action :set_investor, only: [:show, :update, :destroy]

  # GET /investors
  def index
    @investors = Investor.all

    render json: @investors
  end

  # GET /investors/1
  def show
    render json: @investor
  end

  # POST /investors
  def create
    @investor = Investor.new(investor_params)

    if @investor.save
      render json: @investor, status: :created, location: @investor
    else
      render json: @investor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /investors/1
  def update
    if @investor.update(investor_params)
      render json: @investor
    else
      render json: @investor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /investors/1
  def destroy
    @investor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_investor
      @investor = Investor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def investor_params
      params.require(:investor).permit(:name, :email)
    end
end
