require 'rspec/expectations'

RSpec::Matchers.define :be_old do
  match do |actual|
    actual.production_date.year < 1976
  end

  match_when_negated do |actual|
    actual.production_date.year >= 1996
  end

  failure_message do |actual|
    "expected object to be produced before 1976, but it was produced in #{actual.production_date.year}"
  end

  failure_message_when_negated do |actual|
    "expected object not to be produced before 1996, but it was produced in #{actual.production_date.year}"
  end
end