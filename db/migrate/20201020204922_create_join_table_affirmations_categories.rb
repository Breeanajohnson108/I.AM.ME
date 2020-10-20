class CreateJoinTableAffirmationsCategories < ActiveRecord::Migration[6.0]
  def change
    create_join_table :affirmations, :categories do |t|
      # t.index [:affirmation_id, :category_id]
      # t.index [:category_id, :affirmation_id]
    end
  end
end
