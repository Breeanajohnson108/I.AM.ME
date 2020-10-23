class AddAffirmationidToCategories < ActiveRecord::Migration[6.0]
  def change
    add_reference :categories, :affirmation, null: false, foreign_key: true
  end
end
