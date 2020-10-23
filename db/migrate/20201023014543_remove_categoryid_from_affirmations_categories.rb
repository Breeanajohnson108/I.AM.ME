class RemoveCategoryidFromAffirmationsCategories < ActiveRecord::Migration[6.0]
  def change
    remove_column :affirmations_categories, :category_id, :integer
  end
end
