class Bomb
  def initialize
    @production_date = Time.now
  end

  def detonate(delay = nil)
    sleep delay if delay
    raise 'You are dead. No more coding.' unless @defused
  end

  def cut_wire(color)
    if the_right_wire == color
      @defused = true
    else
      detonate
    end
  end

  def the_right_wire
    rand < 0.5 ? :blue : :red
  end

  def production_date
    @production_date
  end
end
