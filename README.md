# GDAX API Tester

For GDAX API v1.

## Purpose

This repo contains scripts to allow you to easily test GDAX Sandbox API endpoints to see the actual response returned by the API. This is useful for quickly exploring how the GDAX API works.

**_Please use only with GDAX Sandbox accounts (https://public.sandbox.gdax.com/). These files are intended as examples only and may contain undesirable actions such as buys and sells at undesirable prices._**

## Usage

1. Create an new API key, secret, and passphrase at https://public.sandbox.gdax.com/settings/api
2. Edit client.js to add your new API key, secret, and passphrase
3. Change into the `methods` directory and run the file for the method you want
to call. The response will be logged to the console.

  ```
  cd methods
  node market_data/products/01_get_products.js
  ```

## License & Disclaimer

The code is released under the MIT License. It may be subtly broken or buggy. Please take the following message to heart:

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.