require 'test_helper'

class PortfolioControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get portfolio_index_url
    assert_response :success
  end

  test "should get about" do
    get portfolio_about_url
    assert_response :success
  end

  test "should get works" do
    get portfolio_works_url
    assert_response :success
  end

end
