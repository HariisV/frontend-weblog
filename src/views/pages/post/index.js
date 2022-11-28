import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardBody, CNav, CNavItem, CNavLink } from '@coreui/react'
import TableComponents from 'src/components/table'

const PostIndex = () => {
  const [tabActive, setTabActive] = useState('Published')

  const handleTabActive = (data) => {
    setTabActive(data)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>All Posts</h4>
            <p className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo itaque tenetur
              praesentium, odit minus. Nisi praesentium quia dolorem cupiditate. Porro temporibus
              dolorem nobis quibusdam magni quidem nihil exercitationem labore.
            </p>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink
                  className="cursor-pointer"
                  onClick={() => handleTabActive('Published')}
                  active={tabActive === 'Published' ? true : false}
                >
                  Published
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  className="cursor-pointer"
                  onClick={() => handleTabActive('Drafts')}
                  active={tabActive === 'Drafts' ? true : false}
                >
                  Drafts
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  className="cursor-pointer"
                  onClick={() => handleTabActive('Trashed')}
                  active={tabActive === 'Trashed' ? true : false}
                >
                  Trashed
                </CNavLink>
              </CNavItem>
            </CNav>
            <TableComponents />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PostIndex
