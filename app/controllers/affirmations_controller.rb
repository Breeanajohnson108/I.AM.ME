class AffirmationsController < ApplicationController
  before_action :set_affirmation, only: [:show, :update, :destroy]
  before_action :authorize_request, only:[:create, :update, :destroy]

  # GET /affirmations
  def index
    @affirmations = Affirmation.all
print @affirmations
    render json: @affirmations
  end

  # GET /affirmations/1
  def show
    render json: @affirmation
  end

  # POST /affirmations
  def create
    print "hello"
    print affirmation_params
    @affirmation = Affirmation.create(affirmation_params)
    @affirmation.user = @current_user

    if @affirmation.save
      render json: @affirmation, status: :created, location: @affirmation
    else
      render json: @affirmation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /affirmations/1
  def update
    if @affirmation.update(affirmation_params)
      render json: @affirmation
    else
      render json: @affirmation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /affirmations/1
  def destroy
    @affirmation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_affirmation
      @affirmation = Affirmation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def affirmation_params
      params.require(:affirmation).permit(:affirmations,:user_id)
    end
end
