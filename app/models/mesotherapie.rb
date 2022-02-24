class Mesotherapie < ApplicationRecord
  validates :image, presence: true
  validates :name, presence: true
  validates :origin, presence: true
  validates :price_one, presence: true
  validates :price_two, presence: true
  validates :time_one, presence: true
  validates :time_two, presence: true
  validates :caracteristic, presence: true
  validates :bienfait, presence: true
  validates :time_precaunisation, presence: true
  validates :technique, presence: true
  validates :motto, presence: true
end
