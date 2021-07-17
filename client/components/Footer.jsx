import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">

        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">

          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">

            <div className="lg:flex">

              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">

                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li className="mt-6">
                      <p className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">© 2021 EasyPet | Your pets digital diary</p>
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">About EasyPet</a>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Frequently Asked Questions</a>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="w-full lg:w-1/2 flex">

                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Privacy policy</a>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Terms of service</a>
                      </Link>
                    </li>
                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </footer>
    </div>
  )
}
export default Footer
