class AddCategoryidToAffirmationsCategories < ActiveRecord::Migration[6.0]
  def change
    add_reference :affirmations_categories, :category, null: false, foreign_key: true
  end
end
