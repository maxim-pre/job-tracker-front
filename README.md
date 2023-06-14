# Job tracker

Job tracker is an application that's designed to help people organise, manage and track their job applications throughout the hiring process. It provides centralized platform to keep all job-related information organized and easily accessible. This is a Full-Stack application using a Rails API with a React Front-End and was built in during the final two weeks of my Software Engineering Bootcamp with <a href="https://generalassemb.ly/education/software-engineering-immersive/london">General Assembly</a>.

### Deployment link : https://job-tracer.netlify.app/

### Login as the Demo User:

Email: demo@gmail.com
Password: 123456

# Getting Started/Code installation

If you would like to Clone and run this project on your machine follow these steps:

1. Clone and navigate into this Repo and run `$npm install` to install all dependencies
2. start the development server with `$npm start`
3. Clone and navigate into the backend repo from this <a href="https://github.com/maxim-pre/job-tracker-back">Link</a>
4. Before you can migrate the database you will need to add your username and password for PSQL in config/database.yml
5. run `$rails db:create db:migrate `
6. run `$rails s` to start the development server
7. Finish!

# Technologies Used

### Stack

- Rails
- React
- PostgreSQL
- Tailwind CSS
- JavaScript
- Ruby

### Npm Packages

- React Quill (Used for the text editors)
- React-Modal (Used for all Modal components)
- ReCharts (used to Create bar and line charts)
- React-Toasify (used for the notification pop-ups)
- React-Router
- React-Icons
- Axios (HTTP client)

### Gems

- Devise (Gem used to implement user authentication)
- Devise-JWT (Devise extension to use JWT tokens for Authentication)

# Technical requirements

- Have a minimum of two models
- Use Authentication
- Have full CRUD on at leasy one model
- Be able to create and destroy and secondary models
- quality code:
- Main point 1
  - Follow naming conventions
  - Consitent indentation
  - well-structured and readable code
  - semantic naming
  - consice functions
  - efficient code
  - DRY (do no repeat) code
- Application must be deployed
- include README.md file

### Developer Tools

- VS Code
- Pesticide (Google chrome extension to help with styling)
- PostMan (used to test API)

# planning

## User Stories

- As a user I should be able to create an account and include goals such as target salary, application goals and target titlle so I can stay on track

- As a user I should be able to log jobs I'm thinking of applying for so I can track their progress

- As a user I should be able to view all my jobs in one place so I can be easily reminded of all the jobs I've logged

- As a user I should be able to filter through all my jobs by status so for example I could see all the jobs I'm yet to apply for

- As a user I should be able to make notes for a job application so that they are easily accessible whenever I come back to it.

- As a user I should be able to update the status of a job so I can record my progress.

## Stretch Goals

- As a user I should be able to save email templates such as a follow up email template so they can easily be accessed later when I need them.

- As a user I should be able to record contacts for a job application so I have a record of all relevant people in case I want to contact them later.

## Entity Relationship Diagram

<img src="images/ERD-project4.png">

## Wireframe

https://www.figma.com/file/gKHg3tLKOQoeTzkwTcxe3j/Figma-basics?type=design&node-id=0%3A1&t=hSP8Sd66EpJhHUGA-1

# Build/Code Process

## Implementing the User model

Starting off with building the Rails API, my first goal was to implement my User modal as Well as routes and controllers to handle Logging in, Logging out, Signing up, ect. To do this I created a Devise User modal and Used Devise-JWT to configure authentication using JWT-tokens.

Devise-JWT comes with three authentication strategies, and I chose the one that involves storing a single valid user-attached token called a JTI (JWT ID) for each user in the Users table.

This is How I included the strategy into the user model

```ruby
include Devise::JWT::RevocationStrategies::JTIMatcher
```

```ruby
  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "application_goal", default: 5
    t.integer "salary_min", default: 0
    t.integer "salary_max", default: 0
    t.string "target_title"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end
```

You Can see the Users table I've added a column called JTI. Whenever a token is dispached for a user the JTI claim is taken from the user model. When a user logs out thier JTI is changed so the token won't be valid anymore.

To tell devise to communicate with JSON I created a Registrations and a sessions Controller. The registrations controller handles operations such as creating and updating a user while the sessions controller handles operations such as signing in logging out.

```ruby
class Users::SessionsController < Devise::SessionsController
  include RackSessionFix
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: {
      status: {code: 200, message: 'Logged in sucessfully.'},
      data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
    }, status: :ok
  end

  def respond_to_on_destroy
    if current_user
      render json: {
        status: 200,
        message: "logged out successfully"
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end

class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionFix
  respond_to :json
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  def respond_with(resource, _opts = {})
    if request.method == "POST" && resource.persisted?
      render json: {
        status: { code: 200, message: "Signed up successfully." },
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }, status: :ok
    elsif request.method == "DELETE"
      render json: {
        status: { code: 200, message: "Account deleted successfully." }
      }, status: :ok
    elsif request.method == "PATCH" && resource.persisted?
      if update_user_without_password(resource, account_update_params)
        render json: {
          status: { code: 200, message: "Account updated successfully." },
          data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
        }, status: :ok
      else
        render json: {
          status: { code: 422, message: "User couldn't be updated successfully. #{resource.errors.full_messages.to_sentence}", errors: resource.errors }
        }, status: :unprocessable_entity
      end
    else
      render json: {
        status: { code: 422, message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}", errors: resource.errors }
      }, status: :unprocessable_entity
    end
  end

  private

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :target_title, :salary_min, :salary_max])
  end

  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :target_title, :salary_min, :salary_max, :application_goal])
  end

  def update_resource(resource, params)
    resource.update_without_password(params)
  end

  def bypass_sign_in(resource, scope=nil)

  end

  def update_user_without_password(resource, params)
    if params[:password].blank? && params[:password_confirmation].blank?
      params.delete(:password)
      params.delete(:password_confirmation)
      resource.update_without_password(params)
    else
      resource.update(params)
    end
  end
end
```
