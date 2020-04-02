class SubsController < ApplicationController

    before_action :require_signed_in! , only: [:edit, :update, :create, :new]

    def index
        @subs = Sub.all
        render :index
    end

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        # debugger
        @sub.moderator_id = current_user.id # come back if errors

        if @sub.save
            redirect_to user_url(current_user.id)
        else
            flash.now[:errors] = @sub.errors.full_messages
            redirect_to user_url(current_user.id)
        end
    end 

    def show
        @sub = Sub.find(params[:id])
        render :show
    end
    
    def edit
        @sub = current_user.subs.find(params[:id])
        render :edit
    end


    def update
        @sub = current_user.subs.find(params[:id])
        if @sub.update_attributes(sub_params)
            redirect_to sub_url(@sub)
        else
            flash[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    # toy = Toy.find(params[:id])
    # sucess = toy.update(cat_id: params[:toy][:cat_id], name: params:[:toy][:name], ttype: params[:toy][:type]) 
 

    private

    def sub_params
        params.require(:sub).permit(:title, :description)
    end

end


# fix nested routes for subs/users
# fix redirecting to users show page after creation of sub