import { medusaClient } from 'lib/config'
import { IS_BROWSER } from 'lib/constants'
// import { getProductHandles } from "lib/util/get-product-handles"
// import Head from "modules/common/components/head"
// import Layout from "modules/layout/templates"
import ProductTemplate from 'modules/products/templates'
import SkeletonProductPage from 'modules/skeletons/templates/skeleton-product-page'
// import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from 'querystring'
// import { ReactElement } from "react"
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { NextPageWithLayout, PrefetchedPageProps } from 'types/global'
import { ScrollView, Text, View } from 'design'
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router"
import useProduct from '../../lib/hooks/use-product'
interface Params extends ParsedUrlQuery {
  handle: string
}

export const ProductScreen = (props) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { handle = '' } = params;

  const { data, isError, isLoading, isSuccess } = useProduct(handle)

  // if (notFound) {
  //   if (IS_BROWSER) {
  //     replace('/404')
  //   }
  //
  //   return null
  //   // return <SkeletonProductPage />
  // }

  if (isLoading || !data) {
    return (
      <View className={'absolute inset-0'}>
        <ScrollView className="bg-white px-4">
          <SkeletonProductPage />
        </ScrollView>
      </View>
    )
  }

  // if (isError) {
  //   replace('/404')
  // }

  if (isSuccess) {
    return (
      <ScrollView className="bg-white">
        {/*TODO: move header to next page*/}
        {/*<Head*/}
        {/*    description={data.description}*/}
        {/*    title={data.title}*/}
        {/*    image={data.thumbnail}*/}
        {/*/>*/}
        <ProductTemplate product={data} />
      </ScrollView>
    )
  }

  return <></>
}

// ProductPage.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const handles = await getProductHandles()
//   return {
//     paths: handles.map((handle) => ({ params: { handle } })),
//     fallback: true,
//   }
// }
//
// export const getStaticProps: GetStaticProps = async (context) => {
//   const handle = context.params?.handle as string
//
//   const queryClient = new QueryClient()
//
//   await queryClient.prefetchQuery([`get_product`, handle], () =>
//     fetchProduct(handle)
//   )
//
//   const queryData = await queryClient.getQueryData([`get_product`, handle])
//
//   if (!queryData) {
//     return {
//       props: {
//         notFound: true,
//       },
//     }
//   }
//
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       notFound: false,
//     },
//   }
// }

