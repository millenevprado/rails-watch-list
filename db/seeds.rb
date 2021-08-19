require 'open-uri'
require 'json'

puts 'Cleaning database...'
Movie.destroy_all

puts 'Creating movies...'

response = URI.open('http://tmdb.lewagon.com/movie/top_rated')
json = JSON.parse(response.read)
results = json['results']

# recebo um array de hashes
# cada hash tem title, overview, vote_avarege, poster_path
# quero esses dados para construir meus movies usando meu modelo
image_base_url = 'https://image.tmdb.org/t/p/w200'

results[0..20].each do |movie_info|
  movie = Movie.new(
    title: movie_info['title'],
    overview: movie_info['overview'],
    rating: movie_info['vote_avarege'],
    poster_url: "#{image_base_url}#{movie_info['poster_path']}"
  )

  movie.save!
  puts "Created #{movie.title}"
end

puts 'Finished!'
