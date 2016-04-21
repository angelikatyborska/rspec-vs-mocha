require_relative '../../lib/bomb'

RSpec.describe Bomb do
  let(:bomb) { described_class.new }

  describe '#detonate' do
    it 'kills the developer' do
      expect { bomb.detonate }.to raise_error(RuntimeError, 'You are dead. No more coding.')
    end
  end

  describe '#cut_the_wire' do
    before :each do
      allow(bomb).to receive(:the_right_wire).and_return(:red, :blue, :red)
      # allow(bomb).to receive(:the_right_wire).with('foo').and_throw('bar')
    end

    it 'disarms the bomb' do
      expect(bomb.cut_wire(:red)).to eq(true)
      expect(bomb.cut_wire(:blue)).to eq(true)
      expect(bomb.cut_wire(:red)).to eq(true)
      expect(bomb.cut_wire(:red)).to eq(true)
      expect(bomb.cut_wire(:red)).to eq(true)
    end
  end

  describe '#production_date' do
    context 'in the past' do
      before do
        Timecop.travel(Time.at(1))
      end

      after do
        Timecop.return
      end

      it 'is old' do
        expect(bomb.production_date.year).to eq(1970)
        expect(bomb).to be_old
      end
    end

    context 'frozen in time' do
      before do
        Timecop.freeze(Time.at(1))
      end

      after do
        Timecop.return
      end

      it 'never gets old' do
        expect(bomb.production_date).to eq(Time.now)
      end
    end
  end
end