require_relative 'bomb'

class RedButton
  def press
    Bomb.new.detonate(1)
  end
end