require_relative '../../lib/red_button'

describe RedButton do
  let(:button) { described_class.new }
  let(:bomb) { spy('bomb') }

  before do
    allow(Bomb).to receive(:new) { bomb }
  end

  describe '#press' do
    it 'can be pressed' do
      expect { button.press }.not_to raise_error
    end

    it 'detonates a bomb' do
      button.press
      expect(bomb).to have_received(:detonate).with(1).exactly(1).times
    end
  end
end