class GhostGame < ActiveRecord::Base
  attr_accessible :fake_word, :game_status, :real_word, :who_wins, :word_length

  serialize :user_list, ::Array
  serialize :thearray, ::Hash


end
