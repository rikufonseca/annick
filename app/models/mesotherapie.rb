class Mesotherapie < ApplicationRecord
  validates :name, presence: true
  validates :explanation, presence: true
  validates :price_one, presence: true
  validates :price_two, presence: true
  validates :time_one, presence: true
  validates :time_two, presence: true
end
