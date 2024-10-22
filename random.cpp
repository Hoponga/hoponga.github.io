#include <iostream> 
#include <algorithm>
#include <functional> 
#include <vector> 

using namespace std; 
#define ll long long 

int main()
{
    // if highest thing is > n remaining, remove highest
    // else, remove 1 from each (always remove first floor)
    
    int n; 
    cin >> n; 
    vector<ll> heights;  
    for (int i = 0; i < n; i++) {
        ll curr; 
        cin >> curr; 
        heights.push_back(curr); 
        
    }
    
    sort(heights.begin(), heights.end()); 
    int left = 0; 
    int right = heights.size() - 1; 
    
    ll floor = 0; 
    int steps = 0; 
    while (left <= right) {
        if (left == right && heights[right] - floor > 0) {
            steps++; 
            break; 

        }
        ll n_remaining = right - left + 1; 
        //std::cout << left << " " << right << " " << steps << " " << (heights[right - floor]) << " " << n_remaining << " " << std::endl; 
        if (heights[right] - floor > n_remaining) {
            right--;
            steps++; 
            
        } else {
            floor++;
            steps++; 
            while (heights[left] - floor == 0) {
                left++; 
                if (left > right) {
                    break; 
                }
            }
        }
        
        
    }
    std::cout << steps << std::endl; 
    
    
    
    
    return 0; 
}