require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get photographs" do
    get :photographs
    assert_response :success
  end

  test "should get set-page" do
    get :set-page
    assert_response :success
  end

  test "should get cinematography" do
    get :cinematography
    assert_response :success
  end

  test "should get video-page" do
    get :video-page
    assert_response :success
  end

end
