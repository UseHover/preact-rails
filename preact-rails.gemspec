Gem::Specification.new do |s|
  s.name        = 'preact-rails'
  s.version     = '0.1.0'
  s.date        = '2019-05-27'
  s.summary     = "Preact integration for Ruby on Rails"
  s.description = "Render preact components in views or controller actions."
  s.authors     = ["Ishuah Kariuki", "David Kutalek"]
  s.email       = ["kariuki@ishuah.com", "dav.kutalek@gmail.com"]
  s.files       = ["lib/preact-rails.rb",
                   "lib/preact/view_helper.rb",
                   "lib/preact/railtie.rb"]
  s.homepage    =
    'https://rubygems.org/gems/preact-rails'
  s.license       = 'Apache-2.0'

  s.add_development_dependency 'rails', '>= 3.2'

  s.add_dependency 'railties', '>= 3.2'
end