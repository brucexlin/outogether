class CreateGhostGames < ActiveRecord::Migration
  def change
    create_table :ghost_games do |t|
      t.integer :word_length
      t.string :real_word
      t.string :fake_word
      t.string :game_status
      t.string :who_wins

      t.timestamps
    end
  end
end
