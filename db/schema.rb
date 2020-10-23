# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_23_020236) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "affirmations", force: :cascade do |t|
    t.string "affirmations"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_affirmations_on_user_id"
  end

  create_table "affirmations_categories", id: false, force: :cascade do |t|
    t.bigint "affirmation_id", null: false
    t.bigint "category_id", null: false
    t.index ["category_id"], name: "index_affirmations_categories_on_category_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "affirmation_id", null: false
    t.index ["affirmation_id"], name: "index_categories_on_affirmation_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "affirmations", "users"
  add_foreign_key "affirmations_categories", "categories"
  add_foreign_key "categories", "affirmations"
end
